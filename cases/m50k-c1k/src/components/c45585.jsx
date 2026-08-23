import React from 'react';
const LABEL_45585 = 'component_45585';
export function Component45585({ value = 45585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45585, 'data-value': derived.doubled }, children);
}
export default Component45585;
