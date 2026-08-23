import React from 'react';
const LABEL_4215 = 'component_4215';
export function Component4215({ value = 4215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4215, 'data-value': derived.doubled }, children);
}
export default Component4215;
