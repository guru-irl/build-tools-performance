import React from 'react';
const LABEL_45282 = 'component_45282';
export function Component45282({ value = 45282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45282, 'data-value': derived.doubled }, children);
}
export default Component45282;
