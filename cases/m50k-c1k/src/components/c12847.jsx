import React from 'react';
const LABEL_12847 = 'component_12847';
export function Component12847({ value = 12847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12847, 'data-value': derived.doubled }, children);
}
export default Component12847;
