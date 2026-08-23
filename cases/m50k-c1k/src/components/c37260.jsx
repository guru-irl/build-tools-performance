import React from 'react';
const LABEL_37260 = 'component_37260';
export function Component37260({ value = 37260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37260, 'data-value': derived.doubled }, children);
}
export default Component37260;
