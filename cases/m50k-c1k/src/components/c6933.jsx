import React from 'react';
const LABEL_6933 = 'component_6933';
export function Component6933({ value = 6933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6933, 'data-value': derived.doubled }, children);
}
export default Component6933;
