import React from 'react';
const LABEL_41480 = 'component_41480';
export function Component41480({ value = 41480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41480, 'data-value': derived.doubled }, children);
}
export default Component41480;
