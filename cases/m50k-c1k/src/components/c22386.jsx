import React from 'react';
const LABEL_22386 = 'component_22386';
export function Component22386({ value = 22386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22386, 'data-value': derived.doubled }, children);
}
export default Component22386;
