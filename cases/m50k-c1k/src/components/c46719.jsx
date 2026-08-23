import React from 'react';
const LABEL_46719 = 'component_46719';
export function Component46719({ value = 46719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46719, 'data-value': derived.doubled }, children);
}
export default Component46719;
