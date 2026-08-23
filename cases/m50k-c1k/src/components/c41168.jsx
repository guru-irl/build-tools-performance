import React from 'react';
const LABEL_41168 = 'component_41168';
export function Component41168({ value = 41168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41168, 'data-value': derived.doubled }, children);
}
export default Component41168;
