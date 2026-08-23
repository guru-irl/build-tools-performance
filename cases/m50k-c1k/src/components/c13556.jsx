import React from 'react';
const LABEL_13556 = 'component_13556';
export function Component13556({ value = 13556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13556, 'data-value': derived.doubled }, children);
}
export default Component13556;
