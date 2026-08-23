import React from 'react';
const LABEL_12958 = 'component_12958';
export function Component12958({ value = 12958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12958, 'data-value': derived.doubled }, children);
}
export default Component12958;
