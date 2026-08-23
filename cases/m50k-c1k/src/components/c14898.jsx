import React from 'react';
const LABEL_14898 = 'component_14898';
export function Component14898({ value = 14898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14898, 'data-value': derived.doubled }, children);
}
export default Component14898;
