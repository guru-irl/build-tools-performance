import React from 'react';
const LABEL_19849 = 'component_19849';
export function Component19849({ value = 19849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19849, 'data-value': derived.doubled }, children);
}
export default Component19849;
