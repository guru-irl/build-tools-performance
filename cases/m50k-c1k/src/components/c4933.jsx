import React from 'react';
const LABEL_4933 = 'component_4933';
export function Component4933({ value = 4933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4933, 'data-value': derived.doubled }, children);
}
export default Component4933;
