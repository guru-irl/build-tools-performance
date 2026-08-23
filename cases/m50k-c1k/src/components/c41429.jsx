import React from 'react';
const LABEL_41429 = 'component_41429';
export function Component41429({ value = 41429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41429, 'data-value': derived.doubled }, children);
}
export default Component41429;
