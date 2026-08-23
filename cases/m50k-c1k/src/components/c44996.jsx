import React from 'react';
const LABEL_44996 = 'component_44996';
export function Component44996({ value = 44996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44996, 'data-value': derived.doubled }, children);
}
export default Component44996;
