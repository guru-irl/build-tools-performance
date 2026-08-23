import React from 'react';
const LABEL_41902 = 'component_41902';
export function Component41902({ value = 41902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41902, 'data-value': derived.doubled }, children);
}
export default Component41902;
