import React from 'react';
const LABEL_7579 = 'component_7579';
export function Component7579({ value = 7579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7579, 'data-value': derived.doubled }, children);
}
export default Component7579;
