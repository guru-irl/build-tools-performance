import React from 'react';
const LABEL_4349 = 'component_4349';
export function Component4349({ value = 4349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4349, 'data-value': derived.doubled }, children);
}
export default Component4349;
