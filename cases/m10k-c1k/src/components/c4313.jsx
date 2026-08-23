import React from 'react';
const LABEL_4313 = 'component_4313';
export function Component4313({ value = 4313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4313, 'data-value': derived.doubled }, children);
}
export default Component4313;
