import React from 'react';
const LABEL_19386 = 'component_19386';
export function Component19386({ value = 19386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19386, 'data-value': derived.doubled }, children);
}
export default Component19386;
