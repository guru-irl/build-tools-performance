import React from 'react';
const LABEL_41221 = 'component_41221';
export function Component41221({ value = 41221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41221, 'data-value': derived.doubled }, children);
}
export default Component41221;
