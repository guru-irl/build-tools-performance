import React from 'react';
const LABEL_35024 = 'component_35024';
export function Component35024({ value = 35024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35024, 'data-value': derived.doubled }, children);
}
export default Component35024;
