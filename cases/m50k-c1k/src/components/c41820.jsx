import React from 'react';
const LABEL_41820 = 'component_41820';
export function Component41820({ value = 41820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41820, 'data-value': derived.doubled }, children);
}
export default Component41820;
