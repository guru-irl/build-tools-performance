import React from 'react';
const LABEL_26313 = 'component_26313';
export function Component26313({ value = 26313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26313, 'data-value': derived.doubled }, children);
}
export default Component26313;
