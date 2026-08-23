import React from 'react';
const LABEL_12898 = 'component_12898';
export function Component12898({ value = 12898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12898, 'data-value': derived.doubled }, children);
}
export default Component12898;
