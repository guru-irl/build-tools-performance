import React from 'react';
const LABEL_42670 = 'component_42670';
export function Component42670({ value = 42670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42670, 'data-value': derived.doubled }, children);
}
export default Component42670;
