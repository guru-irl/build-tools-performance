import React from 'react';
const LABEL_41996 = 'component_41996';
export function Component41996({ value = 41996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41996, 'data-value': derived.doubled }, children);
}
export default Component41996;
