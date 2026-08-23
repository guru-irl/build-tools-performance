import React from 'react';
const LABEL_24044 = 'component_24044';
export function Component24044({ value = 24044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24044, 'data-value': derived.doubled }, children);
}
export default Component24044;
