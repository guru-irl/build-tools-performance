import React from 'react';
const LABEL_5608 = 'component_5608';
export function Component5608({ value = 5608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5608, 'data-value': derived.doubled }, children);
}
export default Component5608;
