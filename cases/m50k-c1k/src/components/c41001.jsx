import React from 'react';
const LABEL_41001 = 'component_41001';
export function Component41001({ value = 41001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41001, 'data-value': derived.doubled }, children);
}
export default Component41001;
