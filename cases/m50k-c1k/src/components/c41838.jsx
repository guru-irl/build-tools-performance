import React from 'react';
const LABEL_41838 = 'component_41838';
export function Component41838({ value = 41838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41838, 'data-value': derived.doubled }, children);
}
export default Component41838;
