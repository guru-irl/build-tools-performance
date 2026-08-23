import React from 'react';
const LABEL_43259 = 'component_43259';
export function Component43259({ value = 43259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43259, 'data-value': derived.doubled }, children);
}
export default Component43259;
