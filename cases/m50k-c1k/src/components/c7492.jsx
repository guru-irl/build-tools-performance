import React from 'react';
const LABEL_7492 = 'component_7492';
export function Component7492({ value = 7492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7492, 'data-value': derived.doubled }, children);
}
export default Component7492;
