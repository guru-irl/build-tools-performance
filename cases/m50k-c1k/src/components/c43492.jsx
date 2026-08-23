import React from 'react';
const LABEL_43492 = 'component_43492';
export function Component43492({ value = 43492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43492, 'data-value': derived.doubled }, children);
}
export default Component43492;
