import React from 'react';
const LABEL_41275 = 'component_41275';
export function Component41275({ value = 41275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41275, 'data-value': derived.doubled }, children);
}
export default Component41275;
