import React from 'react';
const LABEL_43086 = 'component_43086';
export function Component43086({ value = 43086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43086, 'data-value': derived.doubled }, children);
}
export default Component43086;
