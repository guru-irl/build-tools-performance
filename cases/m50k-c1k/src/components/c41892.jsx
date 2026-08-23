import React from 'react';
const LABEL_41892 = 'component_41892';
export function Component41892({ value = 41892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41892, 'data-value': derived.doubled }, children);
}
export default Component41892;
