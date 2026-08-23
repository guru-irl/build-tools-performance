import React from 'react';
const LABEL_19790 = 'component_19790';
export function Component19790({ value = 19790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19790, 'data-value': derived.doubled }, children);
}
export default Component19790;
