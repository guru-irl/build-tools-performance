import React from 'react';
const LABEL_40313 = 'component_40313';
export function Component40313({ value = 40313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40313, 'data-value': derived.doubled }, children);
}
export default Component40313;
