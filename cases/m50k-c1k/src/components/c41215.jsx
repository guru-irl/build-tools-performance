import React from 'react';
const LABEL_41215 = 'component_41215';
export function Component41215({ value = 41215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41215, 'data-value': derived.doubled }, children);
}
export default Component41215;
