import React from 'react';
const LABEL_41994 = 'component_41994';
export function Component41994({ value = 41994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41994, 'data-value': derived.doubled }, children);
}
export default Component41994;
