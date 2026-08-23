import React from 'react';
const LABEL_41408 = 'component_41408';
export function Component41408({ value = 41408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41408, 'data-value': derived.doubled }, children);
}
export default Component41408;
