import React from 'react';
const LABEL_41069 = 'component_41069';
export function Component41069({ value = 41069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41069, 'data-value': derived.doubled }, children);
}
export default Component41069;
