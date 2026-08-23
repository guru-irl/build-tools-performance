import React from 'react';
const LABEL_4492 = 'component_4492';
export function Component4492({ value = 4492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4492, 'data-value': derived.doubled }, children);
}
export default Component4492;
