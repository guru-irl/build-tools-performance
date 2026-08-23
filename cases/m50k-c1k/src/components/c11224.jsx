import React from 'react';
const LABEL_11224 = 'component_11224';
export function Component11224({ value = 11224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11224, 'data-value': derived.doubled }, children);
}
export default Component11224;
