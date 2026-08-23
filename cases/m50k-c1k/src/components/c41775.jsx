import React from 'react';
const LABEL_41775 = 'component_41775';
export function Component41775({ value = 41775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41775, 'data-value': derived.doubled }, children);
}
export default Component41775;
