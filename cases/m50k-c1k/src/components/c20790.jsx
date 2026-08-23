import React from 'react';
const LABEL_20790 = 'component_20790';
export function Component20790({ value = 20790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20790, 'data-value': derived.doubled }, children);
}
export default Component20790;
