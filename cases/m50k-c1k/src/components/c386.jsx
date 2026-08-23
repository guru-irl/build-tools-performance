import React from 'react';
const LABEL_386 = 'component_386';
export function Component386({ value = 386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_386, 'data-value': derived.doubled }, children);
}
export default Component386;
