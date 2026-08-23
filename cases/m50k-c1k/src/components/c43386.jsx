import React from 'react';
const LABEL_43386 = 'component_43386';
export function Component43386({ value = 43386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43386, 'data-value': derived.doubled }, children);
}
export default Component43386;
