import React from 'react';
const LABEL_41501 = 'component_41501';
export function Component41501({ value = 41501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41501, 'data-value': derived.doubled }, children);
}
export default Component41501;
