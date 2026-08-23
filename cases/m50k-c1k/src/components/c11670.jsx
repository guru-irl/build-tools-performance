import React from 'react';
const LABEL_11670 = 'component_11670';
export function Component11670({ value = 11670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11670, 'data-value': derived.doubled }, children);
}
export default Component11670;
