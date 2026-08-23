import React from 'react';
const LABEL_20994 = 'component_20994';
export function Component20994({ value = 20994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20994, 'data-value': derived.doubled }, children);
}
export default Component20994;
