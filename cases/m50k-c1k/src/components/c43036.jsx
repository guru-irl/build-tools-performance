import React from 'react';
const LABEL_43036 = 'component_43036';
export function Component43036({ value = 43036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43036, 'data-value': derived.doubled }, children);
}
export default Component43036;
