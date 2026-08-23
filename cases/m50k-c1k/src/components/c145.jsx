import React from 'react';
const LABEL_145 = 'component_145';
export function Component145({ value = 145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_145, 'data-value': derived.doubled }, children);
}
export default Component145;
