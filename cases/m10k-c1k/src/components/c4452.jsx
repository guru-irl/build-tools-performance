import React from 'react';
const LABEL_4452 = 'component_4452';
export function Component4452({ value = 4452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4452, 'data-value': derived.doubled }, children);
}
export default Component4452;
